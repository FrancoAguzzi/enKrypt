import { expect } from 'chai';
import Signer from "../src"

describe("Ethreum signing", () => {
    it('it should sign correctly', async () => {
        const ethreumSigner = new Signer()
        const msgHash =
            "82ff40c0a986c6a5cfad4ddf4c3aa6996f1a7837f9c398e17e5de5cbd5a12b28";
        const privateKey =
            "3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1";

        const signature = await ethreumSigner.sign(msgHash, privateKey);
        expect(signature).equals("0x99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca661b");
    });
})