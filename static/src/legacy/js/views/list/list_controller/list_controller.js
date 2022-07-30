/** @odoo-module **/
import viewUtils from 'web.viewUtils';
import ListController from '@web/legacy/js/views/list/list_controller';

ListController.include({
    renderButtons: function ($node) {
        this._super.apply(this, arguments);
        this._renderAlwaysVisibleHeaderButtons();
    },
    _renderAlwaysVisibleHeaderButtons() {
        const btnClasses = 'btn-primary btn-secondary btn-link btn-success btn-info btn-warning btn-danger'.split(' ');
        let $elms = $();
        this.headerButtons
            .filter(node => node.attrs.modifiers.always_visible)
            .forEach(node => {
                const $btn = viewUtils.renderButtonFromNode(node);
                $btn.addClass('btn');
                if (!btnClasses.some(cls => $btn.hasClass(cls))) {
                    $btn.addClass('btn-secondary');
                }
                $btn.on("click", this._onHeaderButtonClicked.bind(this, node));
                $elms = $elms.add($btn);
            });
        $elms.appendTo(this.$buttons);
        this.headerButtons = this.headerButtons.filter(node => !node.attrs.modifiers.always_visible);
    },
});

export default ListController;
