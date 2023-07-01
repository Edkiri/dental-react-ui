import './AppointmentStatus.css';

const STATUS_MAP = {
  requested: { name: 'Solicitada', color: 'yellow' },
  confirmed: { name: 'Confirmada', color: 'green' },
  cancelled: { name: 'Cancelada', color: 'red' },
  finished: { name: 'Finalizada', color: 'grey' },
};

export default function AppointmentStatus({ status }) {
  return (
    <div className="appointment-status-container">
      <div className="status-label">
        <strong className="status-label">Estado:</strong>
      </div>
      <div
        style={{ backgroundColor: STATUS_MAP[status].color }}
        className="circle"
      ></div>
      <span className="status-name">{STATUS_MAP[status].name}</span>
    </div>
  );
}
