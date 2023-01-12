import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowLeft as ArrowLeftSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeft: Story = {}
