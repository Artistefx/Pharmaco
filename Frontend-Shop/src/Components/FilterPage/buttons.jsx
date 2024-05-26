import React from 'react';

function Buttons({filterItems, setCategorie, setSearchTerm }) {
    return (
        <div className='d-flex justify-content-center mb-2'>
            <button className='btn btn-success btn-custom-size text-white p-2 px-4 mx-2 btn-lg fw-bold'
                onClick={() => setSearchTerm("")}>
                Tous
            </button>
            {filterItems.map((val) => (
                <button key={val.id} className='btn btn-success btn-custom-size text-white p-2 px-4 mx-2 btn-lg fw-bold'
                    onClick={() => setCategorie(val)}>
                    {val}
                </button>
            ))}
            <style jsx>{`
                .btn-success {
                    background-color: #2da48c;
                    border-color: #2da48c;
                }

                .btn-success:hover {
                    background-color: #84cebe;
                    border-color: #84cebe;
                }

                .btn-success:focus,
                .btn-success.focus {
                    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
                }

                .btn-success:active,
                .btn-success.active,
                .show > .btn-success.dropdown-toggle {
                    background-color: #2da48c;
                    border-color: #2da48c;
                }

                .btn-success.disabled,
                .btn-success:disabled {
                    background-color: #2da48c;
                    border-color: #2da48c;
                }

                /* Ajoutez une classe pour définir la taille des boutons */
                .btn-custom-size {
                    font-size: 16px; /* Définissez la taille de la police souhaitée */
                    padding: 5px 10px; /* Définissez le rembourrage souhaité */
                }
            `}</style>
        </div>
    );
}

export default Buttons;
