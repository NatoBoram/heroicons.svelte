import type { Meta, StoryObj } from '@storybook/svelte'
import { Newspaper as NewspaperSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: NewspaperSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<NewspaperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Newspaper: Story = {}
