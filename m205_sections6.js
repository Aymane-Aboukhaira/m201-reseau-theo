addM205Sections([
S(66, 's66', 'Disponibilité', 'disponibilité',
  def('Assurer l’accès aux services et données quand les utilisateurs autorisés en ont besoin.')+
  h3('Menaces')+
  ul(['DoS.','DDoS.','Panne matérielle.','Ransomware.','Erreur humaine.','Coupure réseau.'])+
  h3('Mécanismes')+
  ul(['Redondance.','Cluster.','Load balancing.','Sauvegardes.','Plan de reprise.','Monitoring.','Anti-DDoS.'])
),
S(67, 's67', 'Analyse de risques', 'analyse de risques',
  h3('Étapes')+
  ul(['Identifier les actifs.','Identifier les menaces.','Identifier les vulnérabilités.','Évaluer la probabilité.','Évaluer l’impact.','Calculer le risque.','Choisir les contre-mesures.','Accepter, réduire, transférer ou éviter le risque.'])+
  h3('Actif')+
  p('Élément ayant de la valeur.')+
  h4('Exemples')+
  ul(['Données clients.','Serveur.','Application.','Réseau.','Compte administrateur.','Image de marque.'])+
  h3('Surface d’attaque')+
  p('Ensemble des points exploitables par un attaquant.')+
  h3('Réduction de surface')+
  ul(['Fermer ports inutiles.','Désactiver services inutiles.','Mettre à jour.','Segmenter.','Restreindre droits.','Filtrer les accès.'])
),
S(68, 's68', 'Sécurité physique', 'sécurité physique',
  h3('Objectif')+
  p('Empêcher l’accès physique non autorisé.')+
  h3('Mesures')+
  ul(['Salle serveur verrouillée.','Badges.','Caméras.','Onduleur.','Climatisation.','Détection incendie.','Contrôle d’accès physique.','Inventaire matériel.'])+
  h3('Lien avec cybersécurité')+
  ul(['Un accès physique peut permettre :','vol disque ;','reset mot de passe ;','branchement rogue device ;','accès console ;','implantation malware USB.'])
),
S(69, 's69', 'Sécurité organisationnelle', 'sécurité organisationnelle',
  h3('Politique de sécurité')+
  p('Document définissant les règles de sécurité.')+
  h3('Charte informatique')+
  p('Règles d’usage du SI pour les utilisateurs.')+
  h3('Sensibilisation')+
  ul(['Formation contre :','phishing ;','mots de passe faibles ;','pièces jointes suspectes ;','partage non autorisé ;','navigation risquée.'])+
  h3('Procédures')+
  ul(['Gestion des incidents.','Gestion des comptes.','Sauvegarde.','Changement de mot de passe.','Révocation d’accès.','Mise à jour.'])
),
S(70, 's70', 'Sécurité réseau — logique de zones', 'sécurité réseau — logique de zones',
  h3('Zone Internet')+
  ul(['Non fiable.','Source externe.'])+
  h3('Zone DMZ')+
  ul(['Intermédiaire.','Services exposés.','Règles strictes.'])+
  h3('Zone LAN')+
  ul(['Interne.','Plus fiable.','Contient utilisateurs et serveurs internes.'])+
  h3('Zone Management')+
  ul(['Administration.','Accès très restreint.','SSH, SNMPv3, HTTPS admin.'])+
  h3('Zone Guest')+
  ul(['Invités.','Isolée du LAN.','Accès Internet seulement.'])+
  h3('Principe')+
  p('Plus une zone est sensible, plus l’accès doit être limité.')
),
S(71, 's71', 'Sécurité des accès distants', 'sécurité des accès distants',
  h3('SSH')+
  ul(['Administration chiffrée.','Remplace Telnet.'])+
  h3('VPN')+
  ul(['Accès distant sécurisé.','Tunnel chiffré.'])+
  h3('MFA')+
  ul(['Ajoute un deuxième facteur.','Réduit le risque de vol de mot de passe.'])+
  h3('Certificat')+
  p('Permet authentification forte.')+
  h3('Bonnes pratiques')+
  ul(['Désactiver Telnet.','Utiliser SSHv2.','Limiter les IP autorisées.','Utiliser comptes nominatifs.','Activer logs.','Appliquer MFA.','Changer les ports seulement ne suffit pas.'])
),
S(72, 's72', 'Sécurité e-mail', 'sécurité e-mail',
  h3('Menaces')+
  ul(['Phishing.','Malware en pièce jointe.','Usurpation de domaine.','Spam.','Ransomware.'])+
  h3('Protections')+
  ul(['SEG.','Antispam.','Antivirus mail.','Filtrage pièces jointes.','SPF/DKIM/DMARC selon contexte.','Sensibilisation.'])
),
S(73, 's73', 'Sécurité des données', 'sécurité des données',
  h3('Données sensibles')+
  ul(['Données personnelles.','Données clients.','Données bancaires.','Contrats.','Secrets professionnels.','Identifiants.','Stratégies internes.'])+
  h3('Mesures')+
  ul(['Classification.','Chiffrement.','Contrôle d’accès.','DLP.','Sauvegarde.','Journalisation.','Moindre privilège.'])+
  h3('Cycle de vie')+
  ul(['Création.','Stockage.','Utilisation.','Transmission.','Archivage.','Suppression sécurisée.'])
),
S(74, 's74', 'Sécurité applicative', 'sécurité applicative',
  h3('Menaces')+
  ul(['Injection.','Buffer overflow.','Faille d’authentification.','Mauvaise gestion des sessions.','Exposition de données.','Mauvaise configuration.'])+
  h3('Protections')+
  ul(['Validation des entrées.','Mise à jour.','WAF.','Gestion sécurisée des sessions.','Principe du moindre privilège.','Tests de sécurité.'])
),
S(75, 's75', 'Pare-feu vs IPS vs WAF', 'pare-feu vs ips vs waf',
  h3('Pare-feu')+
  p('Filtre IP, ports, protocoles, sessions.')+
  h3('IPS')+
  ul(['Analyse le contenu du trafic.','Détecte et bloque attaques connues ou comportements suspects.'])+
  h3('WAF')+
  ul(['Protège les applications web.','Filtre HTTP/HTTPS.','Bloque attaques applicatives comme injections.'])+
  piege(['Firewall ≠ IPS.','IPS ≠ WAF.','Ils sont complémentaires.','---'])
),
S(76, 's76', 'Récapitulatif attaques / solutions', 'récapitulatif attaques / solutions',
  h3('DoS')+
  p('Solution : rate limiting, firewall, IPS, anti-DDoS.')+
  h3('DDoS')+
  p('Solution : scrubbing center, anti-DDoS cloud, anycast, ACL opérateur.')+
  h3('TCP SYN Flooding')+
  p('Solution : SYN cookies, firewall, IPS.')+
  h3('MAC Flooding')+
  p('Solution : Port Security.')+
  h3('VLAN Hopping')+
  p('Solution : désactiver DTP, native VLAN dédiée, ports access.')+
  h3('DHCP Starvation')+
  p('Solution : DHCP Snooping, Port Security.')+
  h3('DHCP Spoofing')+
  p('Solution : DHCP Snooping, ports Trusted/Untrusted.')+
  h3('ARP Spoofing')+
  p('Solution : DAI.')+
  h3('IP Spoofing')+
  p('Solution : IP Source Guard.')+
  h3('Attaque STP')+
  p('Solution : BPDU Guard, Root Guard.')+
  h3('Ransomware')+
  p('Solution : sauvegardes testées, EDR, patching, segmentation.')+
  h3('Phishing')+
  p('Solution : formation, MFA, SEG, vérification.')+
  h3('Malware')+
  p('Solution : antivirus, mises à jour, moindre privilège.')
),
S(77, 's77', 'Mémo final Sécurité', 'mémo final sécurité',
  ul(['Sécurité = protéger ressources et données.','Menace = danger.','Vulnérabilité = faiblesse.','Risque = menace exploitant vulnérabilité.','Risque = Préjudice × Probabilité.','Contre-mesure = réduit risque.','Confidentialité = protéger le contenu.','Intégrité = empêcher modification non autorisée.','Disponibilité = garder service accessible.','Authenticité = vérifier identité.','Non-répudiation = empêcher de nier une action.','Identification = login public.','Authentification = preuve secrète.','Autorisation = droits.','AAA = Authentication, Authorization, Accounting.','IDS = passif.','IPS = actif.','Firewall = filtre IP/port/session.','NGFW = firewall + fonctions avancées.','DMZ = zone entre Internet et LAN.','ASA = firewall Cisco + VPN + NAT + ACL.','NAT = traduction d’adresses.','PAT = plusieurs privés vers une IP publique avec ports.','VPN = tunnel sécurisé.','GRE = tunnel sans chiffrement.','IPsec = sécurité IP.','AH = intégrité/authentification sans chiffrement.','ESP = chiffrement + intégrité + authentification.','Hash = intégrité, ne se déchiffre pas.','Signature = intégrité + authenticité + non-répudiation.','Certificat = identité + clé publique.','PKI = infrastructure certificats.','DoS = une source.','DDoS = plusieurs sources.','MAC Flooding = table CAM saturée.','Port Security = limite MAC.','DHCP Spoofing = faux DHCP.','DHCP Snooping = bloque faux DHCP.','ARP Spoofing = faux IP/MAC.','DAI = bloque ARP faux.','VLAN Hopping = saut VLAN.','DTP désactivé = protection trunk.','BPDU Guard = protège PortFast.','Root Guard = protège Root Bridge.','WEP = obsolète.','WPA2 = AES.','WPA3 = SAE.','WPA2 Enterprise = 802.1X + RADIUS.','CNDP = données personnelles.','DGSSI = sécurité SI administrations.','maCERT = réponse incidents.'])
),
S(78, 's78', 'Pièges d’examen', 'pièges d’examen',
  ul(['Confidentialité ne veut pas dire authenticité.','Authentification ne veut pas dire autorisation.','Identification est publique, authentification est secrète.','Risque n’est pas une vulnérabilité.','IDS ne bloque pas.','IPS bloque.','Firewall filtre surtout IP/port/session.','IPS inspecte le contenu.','DoS vient d’une source.','DDoS vient de nombreuses sources.','Protect ne génère pas de log.','Restrict génère log + compteur.','Shutdown met le port en err-disabled.','DHCP Snooping protège contre faux DHCP.','DAI protège contre ARP Spoofing.','Port Security protège contre MAC Flooding.','Root Guard protège contre faux Root Bridge.','BPDU Guard protège les ports access/PortFast.','WEP ne doit pas être utilisé.','WPA2 Personal = mot de passe partagé.','WPA2 Enterprise = RADIUS.','AH ne chiffre pas.','ESP chiffre.','GRE seul n’est pas sécurisé.','Signature numérique ne cache pas le message.','Hash ne se déchiffre pas.','Sauvegarde non testée = sauvegarde non fiable.','DMZ n’est pas le LAN.','Cybercriminalité est un sous-ensemble de la criminalité informatique.'])
),
]);
