import type { Meta, StoryObj } from '@storybook/svelte'
import NewspaperSvelte from '../../../lib/24/outline/newspaper.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: NewspaperSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<NewspaperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Newspaper: Story = {}
