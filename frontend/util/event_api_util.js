export const fetchEvents = () =>
  $.ajax({
    method: "GET",
    url: "api/events"
  });

export const fetchEvent = id =>
  $.ajax({
    method: "GET",
    url: `api/events/${id}`
  });

export const createEvent = event => {
  return $.ajax({
    method: "POST",
    url: `api/events`,
    data: { event }
  });
};

export const updateEvent = event =>
  $.ajax({
    method: "PATCH",
    url: `api/events/${event.id}`,
    data: { event }
  });

export const deleteEvent = eventId =>
  $.ajax({
    method: "delete",
    url: `api/events/${eventId}`
  });
