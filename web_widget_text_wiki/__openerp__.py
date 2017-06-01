# -*- encoding: utf-8 -*-
# --------------------------------------------------------------------------------
# Project:               TransALM
# Copyright:           © 2017 Infolava GmbH All rights reserved.
# License:             GNU GENERAL PUBLIC LICENSE Version 3.0
# --------------------------------------------------------------------------------
#    This file is part of TransALM
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
# --------------------------------------------------------------------------------
# Created:               Apr 15, 2015 10:20:02 AM by hbouzidi
# Last modified:      2017-04-16 05:51:21 PM
#
# Last Author:           $LastChangedBy$
# Last Checkin:          $LastChangedDate$
# Checked out Version:   $LastChangedRevision$
# HeadURL:               $HeadURL$
# --------------------------------------------------------------------------------

{
    'name' : 'Wiki Editor Widget',
    'version' : '0.1.1',
    'summary' : '''Wiki Editor Widget for textual fields''',
    'author' : 'Infolava',
    'website': 'http://www.infolava.ch',
    'category' : 'Web Widgets',
    'depends' : ['web'],
    'qweb': ['static/src/xml/template.xml'],
    'data':['views/qweb.xml'],
    'active': False,
    'installable': True,
    'application': False,
    'autoinstall': False,
}
