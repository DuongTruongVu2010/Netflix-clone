import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lates transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meme-meo-cam-dao-hai-huoc.jpg"
                alt=""
              />
              <span className="widgetLgName">Phamvan</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$120.0</td>
            <td className="widgetLgStatus">
              <Button type="Approved"></Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meme-meo-cam-dao-hai-huoc.jpg"
                alt=""
              />
              <span className="widgetLgName">Phamvan</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$120.0</td>
            <td className="widgetLgStatus">
              <Button type="Declined"></Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meme-meo-cam-dao-hai-huoc.jpg"
                alt=""
              />
              <span className="widgetLgName">Phamvan</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$120.0</td>
            <td className="widgetLgStatus">
              <Button type="Pending"></Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meme-meo-cam-dao-hai-huoc.jpg"
                alt=""
              />
              <span className="widgetLgName">Phamvan</span>
            </td>
            <td className="widgetLgDate">2 jun 2024</td>
            <td className="widgetLgAmount">$120.0</td>
            <td className="widgetLgStatus">
              <Button type="Approved"></Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
