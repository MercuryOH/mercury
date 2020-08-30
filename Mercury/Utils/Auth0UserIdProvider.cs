using Microsoft.AspNetCore.SignalR;
using System;

namespace Mercury.Utils
{
    // Signalr assigns a random connectionId to each user. 
    // The mapping below lets us use the User Id (auth0 id) as the connectionId for each signalr user
    public class Auth0UserIdProvider : Microsoft.AspNetCore.SignalR.IUserIdProvider
    {
        public string GetUserId(HubConnectionContext connection)
        {
            return Auth.GetUserId(connection.GetHttpContext().User);
        }
    }
}
