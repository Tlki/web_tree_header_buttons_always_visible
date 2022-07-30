# -*- coding: utf-8 -*-
###############################################################################
#
#    Copyright (c) 2021 Organization
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program. If not, see <http://www.gnu.org/licenses/>.
#
###############################################################################

{
    "name": "Tree View Header Buttons Always Visible",
    "category": "Web",
    "version": "15.0.1.0.0",
    "author": "Tlki",
    "license": "AGPL-3",
    "description": "Always visible tree view header buttons",
    "depends": [
        "web"
    ],
    "data": [],
    'assets': {
        'web.assets_backend': [
            'web_tree_header_buttons_always_visible/static/src/legacy/js/views/**/*',
        ],
    },
    "installable": True,
    "application": False,
}
