'use strict';

class auto_daily_credit {

  constructor(mod) {

    // code
    mod.hookOnce('S_LOGIN', 'event', () => {
      if (!mod.trySend('C_REQUEST_RECV_DAILY_TOKEN', 1, {})) {
        mod.log('Unmapped protocol packet \<C_REQUEST_RECV_DAILY_TOKEN\>.');
      }
    });

  }

  destructor() {}

}

module.exports = { NetworkMod: auto_daily_credit };