import React, { Component } from "react";
import "./Header.css";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

class Header extends Component {
	constructor() {
		super();

		this.state = {
			items: [
				{
					label: "My profile",
					icon: "pi pi-fw pi-user",
					items: [
						{
							label: "New",
							icon: "pi pi-fw pi-plus",
							items: [
								{
									label: "Bookmark",
									icon: "pi pi-fw pi-bookmark"
								},
								{
									label: "Video",
									icon: "pi pi-fw pi-video"
								}
							]
						},
						{
							label: "Delete",
							icon: "pi pi-fw pi-trash"
						},
						{
							separator: true
						},
						{
							label: "Export",
							icon: "pi pi-fw pi-external-link"
						}
					]
				},
				{
					label: "Events",
					icon: "pi pi-fw pi-calendar",
					items: [
						{
							label: "Edit",
							icon: "pi pi-fw pi-pencil",
							items: [
								{
									label: "Save",
									icon: "pi pi-fw pi-calendar-plus"
								},
								{
									label: "Delete",
									icon: "pi pi-fw pi-calendar-minus"
								}
							]
						},
						{
							label: "Archieve",
							icon: "pi pi-fw pi-calendar-times",
							items: [
								{
									label: "Remove",
									icon: "pi pi-fw pi-calendar-minus"
								}
							]
						}
					]
				}
			]
		};
	}

	render() {
		return (
			<div>
				<div className="content-section implementation">
					<Menubar model={this.state.items}>
						<InputText placeholder="Search" type="text" />
						<Button
							label="Logout"
							icon="pi pi-power-off"
							style={{ marginLeft: 4 }}
						/>
					</Menubar>
				</div>
			</div>
		);
	}
}

export default Header;
