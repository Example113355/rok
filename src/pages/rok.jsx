import Breadcrumb from "../components/Breadcrumb"
import Select from "react-dropdown-select"
import React, { useState } from "react"
import rok_packages from "../utils/data/rok_data"
import Package from "../components/package"

const options = [
    {
        value: 1,
        label: 'Thứ tự mặc định',
    },
    {
        value: 2,
        label: 'Vip 1',
    },
    {
        value: 3,
        label: 'Vip 2',
    },
    {
        value: 4,
        label: 'Vip 3',
    },
    {
        value: 5,
        label: 'Mới nhất',
    },
    {
        value: 6,
        label: 'Thứ tự theo giá: thấp đến cao',
    },
    {
        value: 7,
        label: 'Thứ tự theo giá: cao đến thấp',
    },
]

const Rok = () => {
    let data = rok_packages
    const [selectedValues, setSelectedValues] = useState([options[0]])
    const handleChange = (values) => {
        getRokData()
        setSelectedValues(values)
    }
    const getRokData = () => {
        switch (selectedValues[0].value) {
            case 1:
                data = rok_packages
                break
            case 2:
                data = rok_packages.filter((item) => item.vip_type === '1')
                break
            case 3:
                data = rok_packages.filter((item) => item.vip_type === '2')
                break
            case 4:
                data = rok_packages.filter((item) => item.vip_type === '3')
                break
            case 5:
                data = rok_packages.toSorted((a, b) => {
                    const [yearA, dayA, monthA] = a.created_date.split('-').map(Number);
                    const [yearB, dayB, monthB] = b.created_date.split('-').map(Number);
                    const dateA = new Date(yearA, monthA - 1, dayA);
                    const dateB = new Date(yearB, monthB - 1, dayB);
                    return dateB - dateA;
                  });
                break
            case 6:
                data = rok_packages.toSorted((a, b) => parseInt(a.price.replace(/\./g, '').replace('$', '')) - parseInt(b.price.replace(/\./g, '').replace('$', '')))
                break
            case 7:
                data = rok_packages.toSorted((a, b) => parseInt(b.price.replace(/\./g, '').replace('$', '')) - parseInt(a.price.replace(/\./g, '').replace('$', '')))
                break
            default:
                data = rok_packages
        }
    }
    getRokData()

    return (
        <div className="rok">
            <div className="rok-header">
                <Breadcrumb />
                <h1 className="rok-heading">
                    Rise of Kingdom Bot
                </h1>
            </div>

            <div className="rok-container">
                <div className="rok-filter">
                    <Select
                        className="rok-select"
                        options={options}
                        onChange={handleChange}
                        searchable={false}
                        values={selectedValues}
                        placeholder={options[0].label}
                    />
                </div>

                <div className="one-result-container">
                    <h3 className="rok-result-heading">Hiển thị kết quả duy nhất</h3>
                    <div className="one-result home-price">
                        <Package {...data[0]} type='rok' />
                    </div>
                </div>

                <div className="all-result">
                    <h3 className="rok-result-heading">Hiển thị tất cả {data.length} kết quả</h3>
                    <div className="best-seller-list">
                    {
                        data.map((p, i) => (
                            <Package key={i} {...p} type='rok' />
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Rok
