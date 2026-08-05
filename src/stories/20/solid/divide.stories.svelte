<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DivideSvelte from '../../../lib/20/solid/divide.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DivideSvelte,
		args: { class: '' },
	})
</script>

<Story name="Divide" />
