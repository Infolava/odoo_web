# -*- encoding: utf-8 -*-
# --------------------------------------------------------------------------------
# Project:               TransALM
# Copyright:           © 2017 Infolava GmbH. All rights reserved.
# License:
# --------------------------------------------------------------------------------
#    This file is part of TransALM
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
# --------------------------------------------------------------------------------
# Created:               Jul 5, 2016 11:11:40 AM by atrabelsi
# Last modified:      2017-04-02 12:51:14 AM
#
# Last Author:           $LastChangedBy$
# Last Checkin:          $LastChangedDate$
# Checked out Version:   $LastChangedRevision$
# HeadURL:               $HeadURL$
# --------------------------------------------------------------------------------
{
    'name' : 'File Browser QWeb Widget',
    'version' : '0.2.0',
    'author' : 'Infolava',
    'website': 'http://www.infolava.ch',
    'category' : 'Web Widgets',
    'summary' :'''QWeb widget to browse folder contents''' ,
    'depends' : [
                    'web',
                ],
    'qweb': ['static/src/xml/template.xml'],
    'data':['view/template.xml'],
    'active': False,
    'installable': True,
    'application':False,
    
 }
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4
#eof $Id$