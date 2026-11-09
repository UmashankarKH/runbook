import type { ToolHandlerFn } from "@/types";

type Input = { message: string };

const CHANNEL = "#umashankar-worktrial";

export default (async ({ input, ctx }) => {
  const message = input.message.trim();
  if (!message) throw new Error("message is empty.");
  const sentAt = new Date().toISOString().slice(11, 16);
  const result = await ctx.executeIntegration<{ ok: boolean; channel: string; ts: string }>({
    connectionConfigId: "slack",
    actionId: "send-message",
    params: { channel: CHANNEL, text: `${message} _(${sentAt} UTC)_` },
  });
  await ctx.log(`Posted status update to ${result.channel} at ${result.ts}`);
  return { channel: result.channel, ts: result.ts };
}) satisfies ToolHandlerFn<Input>;
