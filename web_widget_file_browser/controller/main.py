# -*- encoding: utf-8 -*-
# --------------------------------------------------------------------------------
# Project:               TransALM
# Copyright:           © 2016 Infolava GmbH. All rights reserved.
# License:
# --------------------------------------------------------------------------------
#    This file is part of TransALM
#
#    TransALM is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
# --------------------------------------------------------------------------------
# Created:               Jul 12, 2016 9:26:32 AM by atrabelsi
# Last modified:      2016-07-12 09:26
#
# Last Author:           $LastChangedBy$
# Last Checkin:          $LastChangedDate$
# Checked out Version:   $LastChangedRevision$
# HeadURL:               $HeadURL$
# --------------------------------------------------------------------------------
from openerp import http
import os
import urllib
from openerp.http import request

class file_browser_connector(http.Controller):
    """
        Web controller used as connector for jQueryFileTree file browser.
        Based on the python connector given in jQueryFileTree lib
    """
    
    @http.route('/web/connector/file_browser', type='http')
    def get_content(self, **kwargs):
        r = ['<ul class="jqueryFileTree" style="display: none;">']
        try:
            r = ['<ul class="jqueryFileTree" style="display: none;">']
            d = urllib.unquote(request.params.get('dir', 'c:\\temp'))
            for f in os.listdir(d):
                if f.startswith('.'):
                    continue
                else :
                    ff = os.path.join(d, f)
                    if os.path.isdir(ff):
                        r.append('<li class="directory collapsed"><a rel="%s/">%s</a></li>' % (ff, f))
                    else:
                        e = os.path.splitext(f)[1][1:]    # get .ext and remove dot
                        r.append('<li class="file ext_%s"><a rel="%s">%s</a></li>' % (e, ff, f))
            r.append('</ul>')
        except Exception, e:
            r.append('Could not load directory: %s' % str(e))
        r.append('</ul>')
        return request.make_response(''.join(r))

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4
#eof $Id$