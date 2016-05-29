var tiles = Array.from(document.querySelectorAll('.tile')),
	copy = Array.from(document.querySelectorAll('.tile')),
	batmanWin = false;

tiles.forEach(function(el) {
	el.onclick = function() {
		if (
			!this.classList.contains('batman') &&
			!this.classList.contains('joker')
		) {
			this.classList.add('batman');
			console.log(tiles);
			if (
				checkIfWin(copy, 0, 1, 2, 'batman') ||
				checkIfWin(copy, 3, 4, 5, 'batman') ||
				checkIfWin(copy, 6, 7, 8, 'batman') ||
				checkIfWin(copy, 0, 3, 6, 'batman') ||
				checkIfWin(copy, 1, 4, 7, 'batman') ||
				checkIfWin(copy, 2, 5, 8, 'batman') ||
				checkIfWin(copy, 0, 4, 8, 'batman') ||
				checkIfWin(copy, 2, 4, 6, 'batman')
			) {
				alert('batman wins');
				batmanWin = true;
				clearBoard();
			}
			tiles.splice(tiles.indexOf(this), 1);
			setTimeout(jokerAttacks, 500);
		}

	};
});

function jokerAttacks() {
	if (!(tiles.length)) {
		alert('Try again');
		clearBoard();
	}
	var idx = Math.round(Math.random() * (tiles.length - 1));
	if (tiles[idx] && tiles.length !== 9 && !batmanWin) {
		tiles[idx].classList.add('joker');
		if (
			checkIfWin(copy, 0, 1, 2, 'joker') ||
			checkIfWin(copy, 3, 4, 5, 'joker') ||
			checkIfWin(copy, 6, 7, 8, 'joker') ||
			checkIfWin(copy, 0, 3, 6, 'joker') ||
			checkIfWin(copy, 1, 4, 7, 'joker') ||
			checkIfWin(copy, 2, 5, 8, 'joker') ||
			checkIfWin(copy, 0, 4, 8, 'joker') ||
			checkIfWin(copy, 2, 4, 6, 'joker')
		) {
			alert('joker wins');
			clearBoard();
		}
		console.log(copy);
		tiles.splice(tiles.indexOf(tiles[idx]), 1);
	}
	batmanWin = false;
}

function clearBoard() {
	tiles = Array.from(document.querySelectorAll('.tile'));
	copy.forEach(function(el) {
		el.className = 'tile';
	})
}

function checkIfWin(a, p1, p2, p3, player) {
	if (a[p1].classList.contains(player) && a[p2].classList.contains(player) && a[p3].classList.contains(player)) {
		return true;
	}
	return false;
}