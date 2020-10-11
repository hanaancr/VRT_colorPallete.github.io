#!/bin/bash
./Bash/GenerateImages.sh
echo "Generó las imagenes con Cypress"
./Bash/CompareResemblejs.sh
echo "Comparó las imagenes con ResembleJs"