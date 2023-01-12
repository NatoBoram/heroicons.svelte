import type { Meta, StoryObj } from '@storybook/svelte'
import { Cloud as CloudSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CloudSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CloudSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cloud: Story = {}
