<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CommandLineSvelte from '../../../lib/24/outline/command-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CommandLineSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CommandLine" />
