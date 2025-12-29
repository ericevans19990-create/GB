#!/bin/bash

# Configuration Hostinger
REMOTE_USER="u201307523"
REMOTE_HOST="147.93.92.169"
REMOTE_PORT="65002"
REMOTE_PATH="/home/u201307523/public_html/glorysbusiness-services.com"
SSH_PASSWORD="${SSH_PASSWORD:-pixgyz-4nawcy-regcYq}"

# Couleurs pour output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Déploiement vers Hostinger${NC}"
echo "Host: $REMOTE_HOST:$REMOTE_PORT"
echo "User: $REMOTE_USER"
echo "Path: $REMOTE_PATH"
echo ""

# Vérifier que dist/ existe
if [ ! -d "dist" ]; then
  echo -e "${RED}❌ Erreur: Le dossier 'dist/' n'existe pas${NC}"
  echo "Exécutez: npm run build"
  exit 1
fi

# Build si nécessaire
echo -e "${YELLOW}📦 Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Build échoué${NC}"
  exit 1
fi

# Déployer avec rsync via SSH
echo -e "${YELLOW}📤 Uploading files...${NC}"
echo "$SSH_PASSWORD" | sshpass -p "$SSH_PASSWORD" rsync -avz --delete \
  -e "ssh -o StrictHostKeyChecking=no -p $REMOTE_PORT" \
  dist/ \
  $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/ 2>&1

RSYNC_EXIT=$?
if [ $RSYNC_EXIT -eq 0 ]; then
  echo -e "${GREEN}✅ Déploiement réussi!${NC}"
  echo -e "${GREEN}🌐 Accédez à: https://glorysbusiness-services.com${NC}"
else
  echo -e "${RED}❌ Déploiement échoué (Code: $RSYNC_EXIT)${NC}"
  echo -e "${YELLOW}Essayez la connexion SSH manuelle:${NC}"
  echo "ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST"
  exit 1
fi
