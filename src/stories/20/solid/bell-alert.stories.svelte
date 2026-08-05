<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellAlertSvelte from '../../../lib/20/solid/bell-alert.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BellAlertSvelte,
		args: { class: '' },
	})
</script>

<Story name="BellAlert" />
