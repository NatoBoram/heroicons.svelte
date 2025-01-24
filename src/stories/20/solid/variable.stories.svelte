<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VariableSvelte from '../../../lib/20/solid/variable.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: VariableSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Variable" />
