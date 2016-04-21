# AngularJS et intégration avec JPA

### Installation & Lancement

```bash
# installation des packages node
> npm install

# installation des modules bower
> bower install

# lancement du serveur grunt
> grunt serve
```

Accès à l'application sur **localhost:9000**

N'oubliez pas de lancer le serveur tomcat pour l'application SIR_TP2_3_JPA_JAXRS : [README TP2_3](https://github.com/remihb/SIR_TP2_3_JPA-JAXRS)

Proxyfication avec le serveur tomcat, redirection de toutes les routes depuis *localhost:8080/rest* vers *localhost:9000*

### Le site

##### Liste des maisons */#/home*

- Un controller utilise le service `$http` pour faire un GET de la route **/rest/home** afin de récupérer les informations sur les maisons existantes en base au format *JSON* (par défaut, pas de précision dans les headers)

- Les occupants de chaque maison sont sérializé de façon customisée, *nom + prénom*

- La suppression d'une maison se fait par appelle de la route **/rest/home/delete/:id** avec la méthode DELETE


##### Ajout d'une maison */#/home/add*

Un formulaire permettant d'ajouter une maison en base est proposé.  
On peut :
- ajouter les différentes informations de base : superficie, adresse, ...
- ajouter à la volée des chauffages, si les champs de consommation sont vides, ils ne sont pas ajoutés à la maison.
- ajouter un occupant. La liste des occupants est récupérer par un GET de la route **/rest/home/add**. Ils sont sérializés en JSON sans prendre en compte les informations inutiles comme leurs amis (pas de boucle infinie), ou leur appareils électroniques.

Enfin, lorsqu'on clique sur ajouter, on effectue un POST sur la route **/rest/home/add** et l'objet envoyé est désérializé, notamment son habitant qui l'est de façon customisée à nouveau. On récupère dans le champ *inhabitant* de l'objet envoyé l'ID de la personne voulue.
Côté serveur on va chercher la personne correspondant à cet ID afin de la setter en tant qu'occupant de la maison.
