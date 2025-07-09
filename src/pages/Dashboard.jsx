import React from "react";
import { Box, Text, Button, Flex, Heading, Input } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>Welcome Back 👋</Heading>

      {/* Wallet + Mining */}
      <Flex justify="space-between" gap={6} wrap="wrap">
        <Box flex="1" p={4} bg="gray.50" borderRadius="md">
          <Text fontSize="xl" mb={2}>💰 Wallet Balance: ₦25,000</Text>
          <Button colorScheme="blue" mr={2}>Deposit</Button>
          <Button colorScheme="green">Withdraw</Button>
        </Box>

        <Box flex="1" p={4} bg="gray.50" borderRadius="md">
          <Text fontSize="xl" mb={2}>⛏ Mining</Text>
          <Button colorScheme="purple" mr={2}>Start Mining</Button>
          <Button colorScheme="red">Stop Mining</Button>
        </Box>
      </Flex>

      {/* Games */}
      <Box mt={6} p={4} bg="gray.100" borderRadius="md">
        <Text fontSize="lg">🎮 Casino Games</Text>
        <Flex gap={4} mt={2}>
          <Button colorScheme="pink">Spin & Win</Button>
          <Button colorScheme="teal">Mine Bomb</Button>
          <Button colorScheme="orange">Lucky Number</Button>
        </Flex>
      </Box>

      {/* Referral */}
      <Box mt={6} p={4} bg="gray.100" borderRadius="md">
        <Text fontSize="lg">🤝 Referral Program</Text>
        <Input value="https://platform.com/ref/USER123" isReadOnly mt={2} />
        <Text mt={1} fontSize="sm">Earn 10% from every friend!</Text>
      </Box>

      {/* History */}
      <Box mt={6} p={4} bg="gray.100" borderRadius="md">
        <Text fontSize="lg">📜 Recent Transactions</Text>
        <Text mt={2}>+ ₦1,200 — Mining — Today</Text>
        <Text>– ₦5,000 — Withdrawal — Yesterday</Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
