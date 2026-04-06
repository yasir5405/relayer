import { ChevronsUpDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { IconBrandGoogle, IconBrandMeta } from "@tabler/icons-react";
import { useAdAccount } from "@/context/AdAccountContext";
import { Spinner } from "../ui/spinner";
import { useRef, useState } from "react";
import {
  fetchGoogleAdsAccounts,
  saveGoogleAdsAccount,
  type AdAccount,
  type GoogleAdsTokens,
} from "@/api/ad.api";
import { useGoogleLogin, type CodeResponse } from "@react-oauth/google";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import GlobalLoader from "../GlobalLoader";

const AccountSwitcher = () => {
  const {
    adAccounts,
    selectedAdAccount,
    setSelectedAdAccount,
    loading: adAccountLoading,
    refreshAdAccounts,
  } = useAdAccount();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [
    fetchedGoogleAdAccountFromGoogle,
    setFetchedGoogleAdAccountFromGoogle,
  ] = useState<AdAccount[]>([]);

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const tokensRef = useRef<GoogleAdsTokens | null>(null);

  const onOAuthSuccess = async (
    authResult: Omit<CodeResponse, "error" | "error_description" | "error_uri">,
  ) => {
    setLoading(true);

    try {
      const res = await fetchGoogleAdsAccounts(authResult.code);

      if (!res.success) {
        toast.error(res.error?.message ?? res.message);
        return;
      }

      tokensRef.current = res.data!.tokens;

      setFetchedGoogleAdAccountFromGoogle(res.data!.accounts);
      setSelectedIds(new Set(res.data!.accounts.map((a: AdAccount) => a.id)));
      setDialogOpen(true);
    } catch {
      toast.error("Network error or server unreachable");
    } finally {
      setLoading(false);
    }
  };

  const connectGoogleAds = useGoogleLogin({
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/adwords",
    onSuccess: onOAuthSuccess,
    overrideScope: true,
    ux_mode: "popup",
    select_account: true,
    onError: (error) => {
      console.error("OAuth Failed:", error);
      toast.error("Google authentication failed");
    },
    hint: user?.email ?? undefined,
  });

  const toggleAccount = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSave = async () => {
    if (selectedIds.size === 0) {
      toast.error("Select at least one account");
      return;
    }

    if (!tokensRef.current) {
      toast.error("Session lost. Please reconnect.");
      return;
    }
    const selectedAccounts = fetchedGoogleAdAccountFromGoogle.filter((a) =>
      selectedIds.has(a.id),
    );

    setSaving(true);

    try {
      const res = await saveGoogleAdsAccount({
        selectedAccounts,
        tokens: tokensRef.current,
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(
        `${selectedIds.size} account${selectedIds.size !== 1 ? "s" : ""} connected!`,
      );
      refreshAdAccounts();
    } catch {
      toast.error("Network error or server unreachable");
    } finally {
      setSaving(false);
      setDialogOpen(false);
    }
  };

  return (
    <>
      <GlobalLoader
        isLoading={loading}
        message="Fetching your Google Ads accounts..."
      />
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                {adAccountLoading ? (
                  <div className="flex items-center gap-2 w-full">
                    <div className="size-8 rounded-lg bg-muted animate-pulse shrink-0" />
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="h-3 w-24 rounded bg-muted animate-pulse" />
                      <div className="h-2.5 w-16 rounded bg-muted animate-pulse" />
                    </div>
                  </div>
                ) : selectedAdAccount ? (
                  <>
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary-foreground">
                      {selectedAdAccount.platform === "GOOGLE" ? (
                        <IconBrandGoogle className="size-4" />
                      ) : (
                        <IconBrandMeta className="size-4" />
                      )}
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">
                        {selectedAdAccount.adAccountName}
                      </span>
                      <span className="truncate text-xs">
                        {new Date(selectedAdAccount.createdAt).toDateString()}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg border border-dashed border-muted-foreground/40 text-muted-foreground">
                      <Plus className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium text-foreground">
                        No account connected
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        Click to connect one
                      </span>
                    </div>
                  </>
                )}

                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              side="bottom"
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Connected Ad Accounts
              </DropdownMenuLabel>

              {adAccounts.length === 0 ? (
                <div className="px-2 py-3">
                  <p className="text-xs text-muted-foreground">
                    No accounts connected yet.
                  </p>
                </div>
              ) : (
                adAccounts.map((acc, idx) => (
                  <DropdownMenuItem
                    className="gap-2 p-2"
                    key={acc.adAccountName}
                    onClick={() => setSelectedAdAccount(acc)}
                  >
                    <div className="flex size-6 items-center justify-center rounded-md border">
                      {acc.platform === "GOOGLE" ? (
                        <IconBrandGoogle className="size-3.5 shrink-0" />
                      ) : (
                        <IconBrandMeta className="size-3.5 shrink-0" />
                      )}
                    </div>
                    {acc.adAccountName}
                    <DropdownMenuShortcut>⌘ {idx + 1}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))
              )}

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="gap-2 p-2"
                onClick={() => connectGoogleAds()}
              >
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  {loading ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <>Connect Account</>
                  )}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Ad Accounts</DialogTitle>
            <DialogDescription>
              Choose which Google Ads accounts you want to connect.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-2 max-h-72 overflow-y-auto">
            {fetchedGoogleAdAccountFromGoogle.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No accounts found.
              </p>
            ) : (
              fetchedGoogleAdAccountFromGoogle.map((account) => (
                <div
                  key={account.id}
                  className="flex items-center gap-3 rounded-md border p-3 cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => toggleAccount(account.id)}
                >
                  <Checkbox
                    id={account.id}
                    checked={selectedIds.has(account.id)}
                    onCheckedChange={() => toggleAccount(account.id)}
                    onClick={(e) => e.stopPropagation()} // prevent double-toggle from row click
                  />

                  <div className="flex size-7 items-center justify-center rounded-md border bg-muted">
                    <IconBrandGoogle className="size-4" />
                  </div>

                  <Label
                    htmlFor={account.id}
                    className="flex-1 cursor-pointer text-sm font-medium leading-none"
                  >
                    {account.name}
                    <span className="block text-xs text-muted-foreground font-normal mt-0.5">
                      ID: {account.id}
                    </span>
                  </Label>
                </div>
              ))
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={saving}
            >
              Cancel
            </Button>

            <Button
              onClick={handleSave}
              disabled={saving || selectedIds.size === 0}
            >
              {saving ? (
                <>
                  <Spinner className="size-4 mr-2" />
                  Connecting...
                </>
              ) : (
                `Connect ${selectedIds.size > 0 ? `(${selectedIds.size})` : ""}`
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccountSwitcher;
