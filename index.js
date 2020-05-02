'use strict';

class auto_daily_credit {

  constructor(mod) {

    mod.hookOnce('S_LOGIN', 'event', () => {
      if (!mod.trySend('C_REQUEST_RECV_DAILY_TOKEN', 1, {})) {
        mod.log('Unmapped protocol packet \<C_REQUEST_RECV_DAILY_TOKEN\>.');
      }
    });

  }

  destructor() {}

}

module.exports = auto_daily_credit;