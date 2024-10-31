<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;

final class Oceanalipayhk_Gateway_Blocks extends AbstractPaymentMethodType {

    private $gateway;
    protected $name = 'oceanalipayhk';
    public function initialize() {
        $this->settings = get_option( 'woocommerce_oceanalipayhk_settings', [] );
        $this->gateway = new WC_Gateway_Oceanalipayhk();
    }

    public function is_active() {
        return $this->gateway->is_available();
    }

    public function get_payment_method_script_handles() {

        wp_register_script(
            'oceanalipayhk-blocks-integration',
            plugin_dir_url(__FILE__) . 'js/oceanalipayhk-block.js',
            [
                'wc-blocks-registry',
                'wc-settings',
                'wp-element',
                'wp-html-entities',
                'wp-i18n',
            ],
            null,
            true
        );
        if( function_exists( 'wp_set_script_translations' ) ) {            
            wp_set_script_translations( 'oceanalipayhk-blocks-integration');
            
        }


        return [ 'oceanalipayhk-blocks-integration' ];
    }


    public function get_payment_method_data() {
        $icons[] = array(
            'id'  => 'alipayhk_icon',
            'alt' => 'AlipayHK',
            'src' => WC_HTTPS::force_https_url( plugins_url('images/op_Alipayhk.png' , __FILE__ ) )
        );
        return [
            'title' => $this->gateway->title,
            'description' => $this->gateway->description,
            'icons'=>$icons
        ];
    }

}
?>