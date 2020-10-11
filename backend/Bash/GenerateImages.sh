#!/bin/bash
cd ~
. bash_profile
cd /Users/hangel/Proyectos/ProyectoResenble/pallete
cypress run . &> /Users/hangel/Proyectos/ProyectoResenble/backend/public/loggerCypress.txt
