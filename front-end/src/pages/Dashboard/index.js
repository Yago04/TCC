import React, { useState } from "react";
import "./Dashboard.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Estilos do DatePicker
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, } from "recharts";

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState("Últimos 30 Dias");
    const [startDate, setStartDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false); // Controla a exibição do calendário

    // Dados do gráfico
    const data = [
        { dia: 1, calorias: 3500 },
        { dia: 2, calorias: 3200 },
        { dia: 3, calorias: 2800 },
        { dia: 4, calorias: 2600 },
        { dia: 5, calorias: 2400 },
        { dia: 6, calorias: 2200 },
        { dia: 7, calorias: 2100 },
        { dia: 8, calorias: 2000 },
        { dia: 9, calorias: 2100 },
        { dia: 10, calorias: 2000 },
        { dia: 11, calorias: 1800 },
        { dia: 12, calorias: 2300 },
        { dia: 13, calorias: 2200 },
        { dia: 14, calorias: 2100 },
        { dia: 15, calorias: 2500 },
        { dia: 16, calorias: 2200 },
        { dia: 17, calorias: 2400 },
        { dia: 18, calorias: 2300 },
        { dia: 19, calorias: 2200 },
        { dia: 20, calorias: 2100 },
        { dia: 21, calorias: 2500 },
        { dia: 22, calorias: 2200 },
        { dia: 23, calorias: 2900 },
        { dia: 24, calorias: 2400 },
        { dia: 25, calorias: 2200 },
        { dia: 26, calorias: 2300 },
        { dia: 27, calorias: 2100 },
        { dia: 28, calorias: 2000 },
        { dia: 29, calorias: 1900 },
        { dia: 30, calorias: 2000 },
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === "Escolher Datas") {
            setShowCalendar(!showCalendar); // Alterna a visibilidade do calendário
        } else {
            setShowCalendar(false); // Esconde o calendário para outras opções
        }
        console.log(`Opção selecionada: ${option}`);
    };

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="Container-Dashboard">
                <hr className="custom-line" />
                <h5>Dashboard</h5>
                <div className="date-selector">
                    <h6>Escolha entre as datas ou valores pré-definidos para análise de Calorias:</h6>
                    <div className="button-group">
                        {["Últimos 7 Dias", "Últimos 15 Dias", "Últimos 30 Dias", "Escolher Datas"].map(
                            (option) => (
                                <button
                                    key={option}
                                    className={selectedOption === option ? "selected" : ""}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </button>
                            )
                        )}
                    </div>
                    {showCalendar && (
                        <div className="calendar-container">
                            <h6>Selecione a Data:</h6>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                inline // Mostra o calendário apenas quando o botão é clicado
                            />
                        </div>
                    )}
                    {/* Label exibindo a data selecionada */}
                    <div className="selected-date-label">
                        <label>Data Selecionada: {startDate.toLocaleDateString("pt-BR")}</label>
                    </div>
                </div>

                {/* Indicadores */}
                <div className="indicadores">
                    <div className="indicador">
                        <h3>2036,67 Kcal</h3>
                        <p>Média de Calorias</p>
                    </div>
                    <div className="indicador">
                        <h3>-43,44%</h3>
                        <p>Redução de Consumo</p>
                    </div>
                    <div className="indicador">
                        <h3>61.100 Kcal</h3>
                        <p>Total Calorias</p>
                    </div>
                </div>

                {/* Gráfico */}
                <div className="grafico">
                    <h4>Evolução Kcal / Dia</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="dia" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="calorias" stroke="#ff7300" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                    <Footer/>
            </div>

        </div>
    );
};

export default Dashboard;
