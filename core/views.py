#!/usr/bin/env python

from helpers import view, render_template

@view()
def index(request, *args, **kwargs):
    return render_template(request, 'index.html', {
        'page'  : 'index', 
        'title' : 'CDetails - Home', 
    })

