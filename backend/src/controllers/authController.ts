const { generateNonce, SiweMessage } = require("siwe");

async function Nonce(req: any, res: any) {
  res.setHeader("Content-Type", "text/plain");
  res.send(generateNonce());
}

async function Verify(req: any, res: any) {
  const { message, signature } = req.body;
  const siweMessage = new SiweMessage(message);
  try {
    const message = await siweMessage.verify({ signature });
    res.send(message.data);
  } catch {
    res.send(false);
  }
}

export { Nonce, Verify };
