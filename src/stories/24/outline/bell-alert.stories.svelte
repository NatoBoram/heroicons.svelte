<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellAlertSvelte from '../../../lib/24/outline/bell-alert.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BellAlertSvelte,
		args: { class: '' },
	})
</script>

<Story name="BellAlert" />
