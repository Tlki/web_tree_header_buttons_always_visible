odoo.define('tree_view_header_buttons.tree_view_button', function (require){
    "use strict";

    var ListController = require('web.ListController');
    var viewUtils = require('web.viewUtils');

    ListController.include({
        renderButtons: function ($node) {
            this._super.apply(this, arguments);
            this._alwaysVisibleHeaderButtons();
        },
        _alwaysVisibleHeaderButtons() {
            const btnClasses = 'btn-primary btn-secondary btn-link btn-success btn-info btn-warning btn-danger'.split(' ');
            let $elms = $();
            let to_delete_nodes = []
            this.headerButtons.forEach(node => {
                if (_.isUndefined(node.attrs.modifiers.always_visible) || node.attrs.modifiers.always_visible != true)
                    return
                const $btn = viewUtils.renderButtonFromNode(node);
                $btn.addClass('btn');
                if (!btnClasses.some(cls => $btn.hasClass(cls))) {
                    $btn.addClass('btn-secondary');
                }
                $btn.on("click", this._onHeaderButtonClicked.bind(this, node));
                $elms = $elms.add($btn);
                to_delete_nodes.push(node);
            });
            $elms.appendTo(this.$buttons);
            // if we don't remove button from headerButtons,
            // when selecting some records the button is duplicated
            this.headerButtons = _.filter(this.headerButtons, b => !_.contains(to_delete_nodes, b))
        },
    });
});
