
const oceanalipayhk_settings = window.wc.wcSettings.getSetting( 'oceanalipayhk_data', {} );


const oceanalipayhk_label = window.wp.htmlEntities.decodeEntities( oceanalipayhk_settings.title ) || window.wp.i18n.__( 'Oceanpayment AliPayHK Payment Gateway', 'oceanpayment-alipayhk-gateway' );




const oceanalipayhk_Content = () => {
    return window.wp.htmlEntities.decodeEntities( oceanalipayhk_settings.description || '' );
};


var I = function(e) {
    var t = e.components,
        n = e.title,
        r = e.icons,
        a = e.id;
    Array.isArray(r) || (r = [r]);
    var o = t.PaymentMethodLabel,
        i = t.PaymentMethodIcons;

    const style = {
        'align-items': 'center',
        'display': 'flex',
        'width': '100%'
    };

    return React.createElement("div", {
        className: "wc-oceanalipayhk-blocks-payment-method__label ".concat(a),
        style:style
    }, React.createElement(o, {
        text: n
    }), React.createElement(i, {
        icons: r
    }))
};
const Oceanalipayhk_Block_Gateway = {
    name: 'oceanalipayhk',

    label: React.createElement(I, {
        id: "oceanalipayhk",
        title: oceanalipayhk_settings.title,
        icons: oceanalipayhk_settings.icons
    }),

    content: Object( window.wp.element.createElement )( oceanalipayhk_Content, null ),
    edit: Object( window.wp.element.createElement )( oceanalipayhk_Content, null ),
    canMakePayment: () => true,
    ariaLabel: oceanalipayhk_label,
    // placeOrderButtonLabel: window.wp.i18n.__( 'Proceed to Oceanpayment', 'oceanpayment-alipayhk-gateway' ),
  /*  supports: {
        features: oceanalipayhk_settings.supports,
    },*/
};

window.wc.wcBlocksRegistry.registerPaymentMethod( Oceanalipayhk_Block_Gateway );