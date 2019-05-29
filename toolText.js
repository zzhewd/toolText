/**
 * Created by zhangzhe on 2019/5/28
 * Email:544785380@qq.com
 * @params
 * alert:弹窗信息，弹窗标题，确定回调
 * confirm:弹窗信息，弹窗标题，确定回调，取消回调
 * toast:弹出信息，超时时间，自定义class
 */
//alert弹窗
function alert(hintInfo, hintTit, okCallBack) {
    return new yAlert(hintInfo, hintTit, okCallBack);
}

function yAlert(hintInfo, hintTit, okCallBack) {
    this.init(hintInfo, hintTit, okCallBack);
}
yAlert.prototype = {
    init: function(hintInfo, hintTit, okCallBack) {
        var that = this;
        this.alertFrame = document.createElement('div');
        this.alertFrame.className = 'model_alert model_in';
        this.alertShade = document.createElement('div');
        this.alertShade.className = 'alet_zz alert_shade';
        this.alertInfo = document.createElement('div');
        this.alertInfo.className = 'model_alertinfo';
        this.alertOk = document.createElement('button');
        this.alertOk.className = 'alertBtn_ok';
        this.alertOk.innerText = '确定';
        this.alertFrame.appendChild(this.alertInfo);
        this.alertFrame.appendChild(this.alertOk);
        this.alertShade.appendChild(this.alertFrame);
        document.body.appendChild(this.alertShade);
        this.alertOk.onclick = function() {
            that.btnClick(okCallBack);
        }
        this.pushAlertTit(hintTit);
        this.pushAlertInfo(hintInfo);
    },
    pushAlertTit: function(hintInfo) {
        if (hintInfo != undefined) {
            this.alertTit = document.createElement('div');
            this.alertTit.className = 'model_alerttit';
            this.alertFrame.insertBefore(this.alertTit, this.alertInfo);
            this.alertTit.innerText = hintInfo;
        } else if (hintInfo === undefined) {
            return;
        }
    },
    pushAlertInfo: function(hintTit) {
        var alertInfo = hintTit || '提示内容';
        this.alertInfo.innerText = alertInfo;
    },
    btnClick: function(okCallBack) { //alert点击回调
        var callBack = okCallBack || '';
        if (this.alertShade.style.display === 'block') {
            this.alertShade.style.display = 'none';
        }
        this.alertShade.style.display = 'none';
        this.alertShade.className = 'alet_zz';
        this.alertFrame.className = 'model_alert';
        if (callBack) {
            callBack();
        } else if (callBack === '') {
            return;
        }
    }
};
//confirm确认框
function confirm(affirmText, affirmTit, okCallback, cancelCallb) {
    return new yConfirm(affirmText, affirmTit, okCallback, cancelCallb);
}

function yConfirm(affirmText, affirmTit, okCallback, cancelCallb) {
    this.init(affirmText, affirmTit, okCallback, cancelCallb);
}
yConfirm.prototype = {
    init: function(affirmText, affirmTit, okCallback, cancelCallb) {
        var that = this;
        this.affirmShade = document.createElement('div');
        this.affirmShade.className = 'affirm_zz affirm_shade';
        this.affirmFrame = document.createElement('div');
        this.affirmFrame.className = 'affirm_frame model_in';
        this.affirmInfo = document.createElement('div');
        this.affirmInfo.className = 'affirm_info';
        this.affirmBtnCancel = document.createElement('button');
        this.affirmBtnCancel.className = 'affirm_btn_cancel';
        this.affirmBtnCancel.innerText = '取消';
        this.affirmBtnOk = document.createElement('button');
        this.affirmBtnOk.className = 'affirm_btn_ok';
        this.affirmBtnOk.innerText = '确定';
        this.affirmFrame.appendChild(this.affirmInfo);
        this.affirmFrame.appendChild(this.affirmBtnCancel);
        this.affirmFrame.appendChild(this.affirmBtnOk);
        this.affirmShade.appendChild(this.affirmFrame);
        document.body.appendChild(this.affirmShade);
        this.affirmBtnOk.onclick = function() {
            that.okBtnCallb(okCallback);
        }
        this.affirmBtnCancel.onclick = function() {
            that.cancelCallb(cancelCallb);
        }
        this.pushAffirmTit(affirmTit);
        this.pushAffirmInfo(affirmText);
    },
    pushAffirmTit: function(affirmTit) {
        if (affirmTit != undefined) {
            this.affirmTit = document.createElement('div');
            this.affirmTit.className = 'affirm_tit';
            this.affirmFrame.insertBefore(this.affirmTit, this.affirmInfo);
            this.affirmTit.innerText = affirmTit;
        } else if (affirmTit === undefined) {
            return;
        }
    },
    pushAffirmInfo: function(affirmText) {
        var affirminfo = affirmText || '确认内容';
        this.affirmInfo.innerText = affirminfo;
    },
    okBtnCallb: function(okCallback) { //confirm确认回调
        var callBack = okCallback || '';
        if (this.affirmShade.style.display === 'block') {
            this.affirmShade.style.display = 'none';
        }
        this.affirmShade.style.display = 'none';
        this.affirmShade.className = 'affirm_zz';
        this.affirmFrame.className = 'affirm_frame';
        if (callBack) {
            callBack();
        } else if (callBack === '') {
            return;
        }
    },
    cancelCallb: function(cancelCallb) { //confirm取消回调
        var callBack = cancelCallb || '';
        if (this.affirmShade.style.display === 'block') {
            this.affirmShade.style.display = 'none';
        }
        this.affirmShade.style.display = 'none';
        this.affirmShade.className = 'affirm_zz';
        this.affirmFrame.className = 'affirm_frame';
        if (callBack) {
            callBack();
        } else if (callBack === '') {
            return;
        }
    }
};
//toast弹出提示
function toast(toastText, time, customCss) {
    return new yToast(toastText, time, customCss);
}

function yToast(toastText, time, customCss) {
    this.init(toastText, time, customCss);
}
yToast.prototype = {
    init: function(toastText, time, customCss) {
        this.toastFrame = document.createElement('div');
        this.toastFrame.className = 'toast_zz toast_frame toast_opacity';
        document.body.appendChild(this.toastFrame);
        this.toastInfo(toastText);
        this.closeToast(time, customCss);
        this.customCss(customCss);
    },
    toastInfo: function(toastText) {
        var toasttext = toastText || 'toast提示';
        this.toastFrame.innerText = toasttext;
    },
    closeToast: function(time, customCss) {
        var closeTime = time || 3000;
        var customcss = customCss || ' ';
        var that = this;
        var closeTimeout = setTimeout(function() {
            that.toastFrame.style.display = 'none';
            that.toastFrame.className = 'toast_zz toast_frame ' + customcss;
            clearTimeout(closeTimeout);
        }, closeTime);
    },
    customCss: function(customCss) { //添加自定义class
        var customcss = customCss || '';
        this.toastFrame.className = 'toast_zz toast_frame toast_opacity ' + customcss;
    }
}