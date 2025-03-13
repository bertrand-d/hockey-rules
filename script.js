document.addEventListener('DOMContentLoaded', function() {
    const ruleSelect = document.getElementById('rule-select');
    const ruleExplanation = document.getElementById('rule-explanation');

    const rules = {
        'hors-jeu': `
            <h2>Le Hors-jeu au Hockey sur Glace</h2>
            <p>Un joueur est en position de hors-jeu lorsqu'il pénètre dans la zone offensive avant le palet. 
            La ligne bleue détermine la position de hors-jeu. Tous les joueurs attaquants doivent être derrière 
            ou sur la ligne bleue quand le palet la franchit complètement.</p>
        `,
        'degagement': `
            <h2>Le Dégagement Interdit</h2>
            <p>Un dégagement interdit se produit lorsqu'une équipe, depuis sa propre moitié de patinoire, 
            envoie le palet au-delà de la ligne rouge de but adverse sans qu'il soit touché par un joueur. 
            Cela entraîne un arrêt de jeu et une mise au jeu dans la zone de l'équipe fautive.</p>
        `,
        'penalites': `
            <h2>Les Pénalités</h2>
            <p>Les pénalités mineures durent 2 minutes, les majeures 5 minutes. Pendant ce temps, 
            le joueur pénalisé doit rester au banc des pénalités et son équipe joue en infériorité numérique. 
            Si l'équipe adverse marque un but pendant une pénalité mineure, celle-ci prend fin.</p>
        `,
        'but': `
            <h2>Marquer un But</h2>
            <p>Un but est marqué lorsque le palet franchit complètement la ligne de but entre les poteaux 
            et sous la barre transversale. Le but doit être marqué de façon régulière, sans avoir été poussé, 
            lancé ou dirigé intentionnellement par une partie du corps d'un joueur attaquant.</p>
        `,
        'engagement': `
            <h2>L'Engagement</h2>
            <p>L'engagement est utilisé pour reprendre le jeu au début de chaque période et après chaque arrêt 
            de jeu. Deux joueurs adverses s'affrontent pour le contrôle du palet. Les autres joueurs doivent 
            rester à l'extérieur du cercle d'engagement jusqu'à ce que le palet soit mis en jeu.</p>
        `
    };

    ruleSelect.addEventListener('change', function() {
        const selectedRule = this.value;
        if (selectedRule) {
            ruleExplanation.innerHTML = rules[selectedRule];
        } else {
            ruleExplanation.innerHTML = '<p>Veuillez sélectionner une règle pour voir son explication.</p>';
        }
    });
}); 