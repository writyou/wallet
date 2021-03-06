import {Injectable} from '@angular/core';

const config: any = {
    api: {
        btcGateway: {
            prefix: "http://gateway.anxing131.xyz/v1",
            apis: {
                wallet:"/wallet",
                wallet_next_path: '/wallet/coin/next_path',
                update_scan_flag: '/wallet/coin/update_scan_flag'
            }
        },
        btcRpc: 'http://btcrpc.anxing131.xyz'
    }
};

@Injectable({
    providedIn: 'root'
})
export class ConfigService{
    public globalCfg: any  = config;

    constructor() {}
}
