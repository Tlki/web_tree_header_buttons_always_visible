# Tree Header Buttons Always Visible

## What does this module do?

This addon allows you to override the default functionality of the header buttons of the tree views, allowing the buttons to always be visible in the header.

## Basic usage

Add `{'always_visible': True}` to button **attrs**.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<odoo>
    <data>

        <record id="view_tree_with_header" model="ir.ui.view">
            <field name="name">view.tree.with.header</field>
            <field name="model">model</field>
            <field name="arch" type="xml">
                <tree>
                    <header>
                        <button name="test_method" type="object"
                            string="Test Method" class="oe_highlight"
                            attrs="{'always_visible': True}"/>
                    </header>
                    <field name="field_name"/>
                    <field name="field_name"/>
                </tree>
            </field>
        </record>
    </data>
</odoo>
```

## Known issues

- Methods called from button should not be decorated with `@api.model`
- If the method contains a call to `ensure_one` it will only work if a single record was selected in the tree view. However, you can catch the exception

## Bug Tracker

Bugs are tracked on [GitHub Issues][0].

[0]: https://github.com/Tlki/web_tree_header_buttons_always_visible/issues
