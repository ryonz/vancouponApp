import React from 'react';
import { observable, action, computed } from 'mobx';

class QRcodeStore {
  @observable
  couponModalStatus = 'true';

  @action.bound
  changeCouponModalStatus() {
    this.couponModalStatus = 'false';
  }
}

const QRcode = new QRcodeStore();
export default QRcode;
