module.exports = {
    debug: true,
    state: {
        loginFlag: false
    },
    setLoginFlagAction(newValue) {
        if (this.debug) console.log('setLoginFlagAction triggered with', newValue)
        this.state.loginFlag = newValue;
        console.log(this.state.loginFlag);
    },
    clearLoginFlagAction() {
        if (this.debug) console.log('clearLoginFlagAction triggered')
        this.state.loginFlag = false
    }
}