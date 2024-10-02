import React from 'react';
import NoteList from './NoteList';
import ArchieveList from './ArchieveList';

function NoteHeader({
	notes,
	archieves,
	onArchiveHandler,
	onUnarchiveHandler,
	onDeleteHandler,
	keyword,
	onSearchHandler,
}) {
	return (
		<div className="note-app__header">
			<h1>Notes App</h1>
			<div className="note-search">
				<input
					type="text"
					placeholder="Cari"
					value={keyword}
					onChange={onSearchHandler}
				/>
			</div>
			<NoteList
				notes={notes}
				onArchive={onArchiveHandler}
				onDelete={onDeleteHandler}
			/>
			<ArchieveList
				notes={archieves}
				onArchive={onUnarchiveHandler}
				onDelete={onDeleteHandler}
			/>
		</div>
	);
}

export default NoteHeader;
