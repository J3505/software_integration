
import DataTable, {createTheme} from "react-data-table-component"



createTheme(
	'solarized',
	{
		text: {
			primary: 'grey',
			secondary: 'black',
		},
		background: {
			default: '#fff',
		},
		context: {
			background: '#cb4b16',
			text: '#FFFFFF',
		},
		divider: {
			default: '#073642',
		},
		button: {
			default: '#2aa198',
			hover: 'rgba(0,0,0,.08)',
			focus: 'rgba(255,255,255,.12)',
			disabled: 'rgba(255, 255, 255, .34)',
		},
		sortFocus: {
			default: '#2aa198',
		},
	},
	'dark',
);

const FilterTable = () => {
    const columns = [
        {

            name: 'AÑO',
            selector: row => row.anio,
            sortable: true

        },
        {
            name: 'FECHA',
            selector: row => row.fecha,
            sortable: true

        },
        {
            name: 'DIA',
            selector: row => row.dia,
            sortable: true
        },
        {
            name: 'MES',
            selector: row => row.mes,
            sortable: true
        }
    ]
    const data = [ 
        {
            anio: '2024',
            fecha: '24/06/2024',
            dia: 'Martes',
            mes: 'Setiembre'
        },
        {
            anio: '2024',
            fecha: '24/07/2024',
            dia: 'Martes',
            mes: 'Setiembre'
        },
        {
            anio: '2024',
            fecha: '24/08/2024',
            dia: 'Martes',
            mes: 'Setiembre'
        },
        {
            anio: '2024',
            fecha: '24/09/2024',
            dia: 'Martes',
            mes: 'Setiembre'
        }
    ]

    return (
        <>
        
            <DataTable className="bg-blue-200"

                columns={columns}
                data={data}
                selectableRows
                fixedHeader
                pagination
                paginationPerPage={2}
                theme="solarized"
                // onSelectedRowsChange={data => console.log(data)}
            /> 
        </>
    )
}

export default FilterTable
