// @flow
import React from 'react'

type Props = {
  to: string,
  successFn: Function,
  failFn: Function,
  satoshis: number,
}
type State = { step: 'fresh' | 'pending' | 'complete' }

class BadgerButton extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      step: 'fresh',
    }
  }

  handleClick() {
    const { to, satoshis, successFn, failFn } = this.props
    if (window && typeof window.Web4Bch !== 'undefined') {
      // const {web4bch} = window
      let { web4bch } = window
      let web4bch2 = new window.Web4Bch(web4bch.currentProvider)

      console.log('this far?')
      let txParams = {
        to,
        from: web4bch.bch.defaultAccount,
        value: satoshis,
      }
      // parent.classList.add("clicked");
      web4bch.bch.sendTransaction(txParams, (err, res) => {
        if (err) {
          console.log('send err', err)
        } else {
          console.log('send success:', res)
          // let paywallId = badgerButton.getAttribute("data-paywall-id")
          // if (paywallId) {
          //   let free = document.getElementById("free")
          //   let paywall = document.getElementById("paywall")
          //   free.style.display = "none"
          //   paywall.style.display = "block"
          // }
          // parent.classList.add("success")
          // let successCallback = badgerButton.getAttribute("data-success-callback")
          if (successFn) {
            successFn(res)
            // window[successCallback](res)
          }
        }
      })
    } else {
      window.open('https://badgerwallet.cash')
    }
  }

  render() {
    const { to, successFn, failFn, satoshis } = this.props
    return (
      <>
        <div id="free">
          <div id="button-wrapper">
            <button
              // className="badger-button"
              // data-to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
              // data-satoshis="1000"
              // data-paywall-id="paywall"
              // data-success-callback="badgerCallback"
              onClick={this.handleClick}
            >
              <p>Purchase for 1/3rd of $0.01</p>
              <div className="fill" />
              <div className="fa fa-check" />
            </button>
          </div>
        </div>
        <div id="paywall" style={{ display: 'none' }}>
          <h5>Thank you for purchasing!</h5>
          <p>
            <img src="img/bch_logo.svg" className="c-image--cover" />
          </p>
        </div>
      </>
    )
  }
}

export default BadgerButton
