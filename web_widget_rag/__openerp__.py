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
# Created:               24 Mar 2015 13:24:19 by hbouzidi
# Last modified:         2017-04-02 12:51:55 AM
#
# Last Author:           $LastChangedBy$
# Last Checkin:          $LastChangedDate$
# Checked out Version:   $LastChangedRevision$
# HeadURL:               $HeadURL$
# --------------------------------------------------------------------------------
{
    'name' : 'RAG QWeb Widget',
    'version' : '2.1.0',
    'author' : 'Infolava',
    'website': 'http://www.infolava.ch',
    'category' : 'Web Widgets',
    'depends' : [
                    'web',
                ],
    'qweb' : [
        'static/src/xml/template.xml'
        ],
    'data' : [
        'views/qweb.xml'
        ],
    'active' : False,
    'installable' : True,
    'summary' : '''Red-Amber-Green Visualising Widget''',
    
 }
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4
# eof $Id$
