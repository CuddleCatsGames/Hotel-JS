		const hotel = {
			name: 'Lehmann House Bed & Breakfast',
			type: 'Hotel',
			homepage: 'https://www.lehmannhouse.com/',
			description: 'We welcome couples, single travelers, business travelers and small groups for the ultimate St. Louis experience.',
			petsAllowedTrueFalse: false,
			totalRoomCount: 26,
			priceRange: '$$$',
			amenitiesArr: [
				{
					name: 'null',
					url: 'null',
					imageUrl: 'null'
				},
			],
			roomGroupsArr: [
				{
					roomType: 'Presidents Room',
					numberOfRooms: 'null',
				},
				{
					roomType: 'The Map Room',
					numberOfRooms: 'null',
				}
				{
					roomType: 'Nora's Room',
					numberOfRooms: 'null',
				},
				{
					roomType: 'The John Stark Room',
					numberOfRooms: 'null',
				}
				{
					roomType: 'Frederick's Room',
					numberOfRooms: 'null',
				},
				{
					roomType: 'Worlds Fair Room',
					numberOfRooms: 'null',
				}
				{
					roomType: 'The Judge Sears Room',
					numberOfRooms: 'null',
				},
			],
			currenciesAccepted: 'USD',
			openingHours: '8:00',
			paymentAccepted: 'Cash and Cards',
			availableLanguage: 'English',
			checkInTime: '16:00',
			checkOutTime: '11:00',
			imageArr: [
				{
					caption: 'John Stark Room',
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_5324.JPG?width=1000&height=700&shrink=false&g=24',
				},
				{
					caption: 'John Stark Room',
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_8550.jpg?width=1000&height=700&shrink=false&g=24',
				}
				{
					caption: 'Around the House and Grounds',
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_3529.JPG?width=1000&height=700&shrink=false&g=27',
				},
				{
					caption: 'Foyer fireplace with fire burning',
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_9426.JPG?width=1000&height=700&shrink=false&g=27',
				}
				{
					caption: 'Worlds' Fair Room',
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_2022.JPG?width=1000&height=700&shrink=false&g=26',
				},
			],
			logoUrl: 'data: image/png;base64,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',
			slogan: 'We welcome couples, single travelers, business travelers and small groups for the ultimate St. Louis experience.',
			copyrightUrl: 'null',
			facebookUrl: 'https://www.facebook.com/1893LehmannHouse/',
			twitterUrl: 'null',
			instagramUrl: 'null',
			linkedinUrl: 'null',
			contact: {
				phone: '(314) 422-1483',
				email: 'lehmannhousebnb@gmail.com',
			},
			location: {
				street: 'Lehmann House B&B, 10 Benton Place',
				city: 'Saint Louis',
				state: 'Missouri',
				zip: '33139',
				country: 'USA',
			},
			lowestPrice: 100,
			highestPrice: 1500,
			rating: {
				value: '4.7',
				count: '58',
			},
			page: {
				name: 'Home',
				url: 'https://www.lehmannhouse.com/',
				video: {
					name: 'We welcome couples, single travelers, business travelers and small groups for the ultimate St. Louis experience.',
					description: 'null',
					thumbnailUrl: 'null',
					contentUrl: '',
					embedUrl: '',
					uploadDateISO: 'null',
					duration: {
						min: '',
						sec: '',
					}
				},
				inquireableItem: {
					type: 'Hotel Room',
					name: 'Room Name',
				}
	},
	roomsArr: [
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'The Presidents Room', // string
			url: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--the-presidents-room/', // url
			bookUrl: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--the-presidents-room/', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: true, // boolean
			minPrice: '225', // number
			maxPrice: '225', // number
			description: 'One of our most spacious guest room, with its golden maple flooring, the Presidents' Room gently wakes you in the morning with the warmth of the sun pouring in from the east.', // string
			defaultPrice: '225', // number
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: true, // boolean
			images: [
				{
					caption: 'The Presidents Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/PR_11.jpg?width=1000&height=700&shrink=false&g=22', // url
				},
				{
					caption: 'The Presidents Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_9795.JPG?width=1000&height=700&shrink=false&g=22', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: '', // string
					url: '', // url
					imageUrl: '' // url
				},
			],
		 [
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'The Map Room', // string
			url: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--the-map-room/', // url
			bookUrl: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--the-map-room/', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: '', // boolean
			minPrice: '225', // number
			maxPrice: '', // number
			description: 'Comfortably air condiditoned in the summer, the winter offers guests a gas fireplace for that romantic feel. Complimenting the guest room is its en suite, marble tiled bathroom and dressing room.', // string
			defaultPrice: '225', // number
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: '', // boolean
			images: [
				{
					caption: 'The Map Room', // string
					url: 'https://www.lehmannhouse.com/images/LehmannHouse_LafayetteSquare_3MR_11.JPG?width=405&height=405&shrink=false', // url
				},
			],
			roomAmenitiesArr: [
				{
					name: '', // string
					url: '', // url
					imageUrl: '' // url
				},
			],
		 [
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'Noras Room', // string
			url: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--noras-room/', // url
			bookUrl: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--noras-room/', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: true, // boolean
			minPrice: '255', // number
			maxPrice: '', // number
			description: 'The maple floors have been refinished to reveal their golden patina. The private, marble tiled bath has been recreated with authentic fixtures featuring the original marble sink and the addition of a slipper tub.', // string
			defaultPrice: '255', // number
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'King', // string
			smokingBoolean: '', // boolean
			images: [
				{
					caption: 'Noras Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_9813.JPG?width=1000&height=700&shrink=false&g=23', // url
				},
				{
					caption: 'Noras Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_9811.JPG?width=1000&height=700&shrink=false&g=23', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: '', // string
					url: '', // url
					imageUrl: '' // url
				},
			],
		 [
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'The John Stark Room', // string
			url: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--the-john-stark-room/', // url
			bookUrl: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--the-john-stark-room/', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: true, // boolean
			minPrice: '195', // number
			maxPrice: '', // number
			description: 'This massive room sits on the third floor, above where the turret would be making it ideal for a group of four.', // string
			defaultPrice: '195', // number
			maxOccupancy: '4', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2', // number
			bedType: 'King', // string
			smokingBoolean: '', // boolean
			images: [
				{
					caption: 'John Stark Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_8550.jpg?width=1000&height=700&shrink=false&g=24', // url
				},
				{
					caption: 'John Stark Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_5324.JPG?width=1000&height=700&shrink=false&g=24', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: '', // string
					url: '', // url
					imageUrl: '' // url
				},
			],
		 [
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'Fredericks Room', // string
			url: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--fredericks-room/', // url
			bookUrl: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-king-room--fredericks-room/', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: true, // boolean
			minPrice: '195', // number
			maxPrice: '', // number
			description: 'Frederick's Room is spacious and light-filled, overlooking the side garden below. It's as if it's nestled in the 129 year old tulip poplar tree outside.', // string
			defaultPrice: '195', // number
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2', // number
			bedType: 'King', // string
			smokingBoolean: '', // boolean
			images: [
				{
					caption: 'Frederick's Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_0664.JPG?width=1000&height=700&shrink=false&g=25', // url
				},
				{
					caption: 'Frederick's Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_0671.JPG?width=1000&height=700&shrink=false&g=25', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: '', // string
					url: '', // url
					imageUrl: '' // url
				},
			],
		 [
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'The Worlds Fair Room', // string
			url: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-queen-room--the-worlds-fair-room/', // url
			bookUrl: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-queen-room--the-worlds-fair-room/', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: true, // boolean
			minPrice: '175', // number
			maxPrice: '', // number
			description: 'This room was named to honor that distinguished position in St. Louis' history. The Worlds' Fair Room features its own spacious private second floor deck overlooking the gardens below.', // string
			defaultPrice: '175', // number
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '2', // number
			bedType: 'King', // string
			smokingBoolean: '', // boolean
			images: [
				{
					caption: 'Worlds' Fair Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_2019.JPG?width=1000&height=700&shrink=false&g=26', // url
				},
				{
					caption: 'Worlds' Fair Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/IMG_2022.JPG?width=1000&height=700&shrink=false&g=26', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: '', // string
					url: '', // url
					imageUrl: '' // url
				},
			],
		 [
		{
			type: 'HotelRoom', // string -> HotelRoom or Suite
			name: 'The Judge Sears Room', // string
			url: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-queen-room--the-judge-sears-room/', // url
			bookUrl: 'https://www.lehmannhouse.com/properties/lehmann-house-bed--breakfast-queen-room--the-judge-sears-room/', // url
			tourUrl: '', // url
			petsAllowedTrueOrFalse: true, // boolean
			minPrice: '328', // number
			maxPrice: '', // number
			description: 'Frederick Lehmann was mentored by Judge Epinias. Sears, putting him through college and law school. The Judge Sears' Room has a beautiful view of the Benton Place mall. It's unique in that it is our only suite, with its adjoining sun porch, climate controlled so it can be enjoyed all year long.', // string
			defaultPrice: '328', // number
			maxOccupancy: '2', // number
			maxOccupancy: '2', // number
			checkInTime: '16:00', // datetime
			checkOutTime: '11:00', // datetime
			bedCount: '1', // number
			bedType: 'Queen', // string
			smokingBoolean: '', // boolean
			images: [
				{
					caption: 'Judge Sears Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/sears.JPG?width=1000&height=700&shrink=false&g=30', // url
				},
				{
					caption: 'Judge Sears Room', // string
					url: 'https://www.lehmannhouse.com/images/galleries/P1010146.JPG?width=1000&height=700&shrink=false&g=30', // url
				}
			],
			roomAmenitiesArr: [
				{
					name: '', // string
					url: '', // url
					imageUrl: '' // url
				},
			],
		}
	],
};			
	
