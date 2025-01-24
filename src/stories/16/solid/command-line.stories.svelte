<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CommandLineSvelte from '../../../lib/16/solid/command-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CommandLineSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CommandLine" />
