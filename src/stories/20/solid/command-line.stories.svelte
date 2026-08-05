<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CommandLineSvelte from '../../../lib/20/solid/command-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CommandLineSvelte,
		args: { class: '' },
	})
</script>

<Story name="CommandLine" />
